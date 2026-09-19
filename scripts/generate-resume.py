from pathlib import Path
from shutil import copy2

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    HRFlowable,
    Image,
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "hong-inseong-resume.pdf"
PUBLIC_RESUME = ROOT / "public" / "resume" / "hong-inseong-resume.pdf"
PHOTO = ROOT / "public" / "profile.jpg"
FONT = Path("/System/Library/Fonts/Supplemental/AppleGothic.ttf")

INK = colors.HexColor("#101828")
MUTED = colors.HexColor("#475467")
ACCENT = colors.HexColor("#2563EB")
ACCENT_SOFT = colors.HexColor("#EFF6FF")
LINE = colors.HexColor("#D0D5DD")
PANEL = colors.HexColor("#F8FAFC")
WHITE = colors.white


def register_fonts() -> None:
    pdfmetrics.registerFont(TTFont("NeoRegular", str(FONT)))
    pdfmetrics.registerFont(TTFont("NeoMedium", str(FONT)))
    pdfmetrics.registerFont(TTFont("NeoSemiBold", str(FONT)))
    pdfmetrics.registerFont(TTFont("NeoBold", str(FONT)))
    pdfmetrics.registerFontFamily(
        "Neo",
        normal="NeoRegular",
        bold="NeoBold",
        italic="NeoRegular",
        boldItalic="NeoBold",
    )


register_fonts()

styles = getSampleStyleSheet()


def style(name: str, **kwargs) -> ParagraphStyle:
    defaults = {
        "fontName": "NeoRegular",
        "fontSize": 9.2,
        "leading": 14.2,
        "textColor": INK,
        "wordWrap": "CJK",
        "spaceAfter": 0,
        "spaceBefore": 0,
    }
    defaults.update(kwargs)
    return ParagraphStyle(name, **defaults)


NAME = style("Name", fontName="NeoBold", fontSize=25, leading=28, letterSpacing=-0.4)
ROLE = style("Role", fontName="NeoSemiBold", fontSize=11, leading=15, textColor=ACCENT)
CONTACT = style("Contact", fontSize=8.3, leading=12.5, textColor=MUTED)
SECTION = style(
    "Section",
    fontName="NeoBold",
    fontSize=9.5,
    leading=12,
    textColor=ACCENT,
    letterSpacing=0.7,
)
INTRO_TITLE = style("IntroTitle", fontName="NeoBold", fontSize=15, leading=20)
INTRO_BODY = style("IntroBody", fontSize=9.5, leading=15, textColor=MUTED)
ITEM_TITLE = style("ItemTitle", fontName="NeoBold", fontSize=13.2, leading=17)
ITEM_META = style("ItemMeta", fontName="NeoMedium", fontSize=8.4, leading=12, textColor=MUTED)
ITEM_SUMMARY = style("ItemSummary", fontName="NeoSemiBold", fontSize=10, leading=15)
BODY = style("Body", fontSize=9.1, leading=14.2, textColor=MUTED)
BULLET = style(
    "Bullet",
    fontSize=9.1,
    leading=14.2,
    textColor=INK,
    leftIndent=10,
    firstLineIndent=-8,
    bulletIndent=0,
    spaceAfter=3,
)
LABEL = style(
    "Label",
    fontName="NeoBold",
    fontSize=7.8,
    leading=10,
    textColor=ACCENT,
    letterSpacing=0.5,
)
COMPACT = style("Compact", fontSize=8.7, leading=13.2, textColor=MUTED)
SMALL = style("Small", fontSize=7.6, leading=10.5, textColor=MUTED)


def p(text: str, paragraph_style: ParagraphStyle = BODY) -> Paragraph:
    return Paragraph(text, paragraph_style)


def section_heading(label: str) -> Table:
    table = Table(
        [[p(label.upper(), SECTION), HRFlowable(width="100%", thickness=0.8, color=INK)]],
        colWidths=[43 * mm, 123 * mm],
    )
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (0, 0), 4 * mm),
                ("RIGHTPADDING", (1, 0), (1, 0), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    return table


def bullet(text: str) -> Paragraph:
    return Paragraph(f"• {text}", BULLET)


def item_header(title: str, meta: str, submeta: str = "") -> Table:
    right = meta if not submeta else f"{meta}<br/><font color='#667085'>{submeta}</font>"
    table = Table(
        [[p(title, ITEM_TITLE), p(right, ITEM_META)]],
        colWidths=[124 * mm, 42 * mm],
    )
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("ALIGN", (1, 0), (1, 0), "RIGHT"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    return table


def tag_line(text: str) -> Table:
    table = Table([[p(text, LABEL)]], colWidths=[166 * mm])
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), ACCENT_SOFT),
                ("BOX", (0, 0), (-1, -1), 0.6, colors.HexColor("#BFDBFE")),
                ("LEFTPADDING", (0, 0), (-1, -1), 8),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8),
                ("TOPPADDING", (0, 0), (-1, -1), 6),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
            ]
        )
    )
    return table


def draw_footer(canvas, doc) -> None:
    canvas.saveState()
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.5)
    canvas.line(22 * mm, 14 * mm, A4[0] - 22 * mm, 14 * mm)
    canvas.setFont("NeoMedium", 7.5)
    canvas.setFillColor(MUTED)
    canvas.drawString(22 * mm, 9 * mm, "HONG INSEONG · FULL-STACK WEB DEVELOPER")
    canvas.drawRightString(A4[0] - 22 * mm, 9 * mm, f"{doc.page} / 2")
    canvas.restoreState()


def build_story():
    story = []

    photo = Image(str(PHOTO), width=27 * mm, height=34.7 * mm)
    photo.hAlign = "RIGHT"
    contact = (
        "ghddls0704@kakao.com"
        "<br/><link href='https://github.com/BackdevHong' color='#2563EB'>github.com/BackdevHong</link>"
        "<br/><link href='https://backdevhong.github.io/portfolio-hong/' color='#2563EB'>backdevhong.github.io/portfolio-hong</link>"
    )
    header_left = [
        p("홍인성", NAME),
        Spacer(1, 3 * mm),
        p("Full-stack Web Developer", ROLE),
        Spacer(1, 3.2 * mm),
        p(contact, CONTACT),
    ]
    header = Table([[header_left, photo]], colWidths=[137 * mm, 29 * mm])
    header.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    story.extend([header, Spacer(1, 8 * mm)])

    intro = Table(
        [
            [
                [
                    p("사용자 흐름부터 데이터·운영까지 연결하는 풀스택 개발자", INTRO_TITLE),
                    Spacer(1, 2.5 * mm),
                    p(
                        "약 1년 6개월의 제조 데이터 실무를 바탕으로 React·Next.js 프론트엔드와 "
                        "FastAPI·Node.js 백엔드, 인증·결제·RAG·Cloud 인프라까지 구현했습니다. "
                        "화면과 API를 따로 보지 않고 사용자와 데이터가 이동하는 전체 흐름을 설계하며, "
                        "운영에서 드러난 문제는 재현과 테스트를 통해 해결합니다.",
                        INTRO_BODY,
                    ),
                ]
            ]
        ],
        colWidths=[166 * mm],
    )
    intro.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), PANEL),
                ("BOX", (0, 0), (-1, -1), 0.7, LINE),
                ("LEFTPADDING", (0, 0), (-1, -1), 16),
                ("RIGHTPADDING", (0, 0), (-1, -1), 16),
                ("TOPPADDING", (0, 0), (-1, -1), 14),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 14),
            ]
        )
    )
    story.extend([intro, Spacer(1, 8 * mm)])

    story.extend(
        [
            section_heading("Professional Experience"),
            Spacer(1, 5 * mm),
            item_header("㈜연합시스템 · IT 도제학생(사원)", "2021.08 - 2023.01", "약 1년 6개월"),
            Spacer(1, 2 * mm),
            p("제조 공정 데이터 검토·정제 및 Python 데이터 처리 자동화", ITEM_SUMMARY),
            Spacer(1, 3 * mm),
            bullet("MySQL 공정 이력의 이상 데이터를 확인하고 현업 담당자와 업무 기준·예외 상황을 리뷰"),
            bullet("반복적인 데이터 전처리를 Python·Pandas 로직으로 전환해 재사용 가능한 처리 흐름 구축"),
            bullet("lot별 공정 이력과 근무·휴게 시간을 결합한 완료 시간 예측 도구로 조회부터 결과 출력까지 연결"),
            Spacer(1, 7 * mm),
            section_heading("Selected Project 01"),
            Spacer(1, 5 * mm),
            item_header("MediSense · 의료 AI 상담 서비스", "2026.08 - 2026.09", "팀 프로젝트"),
            Spacer(1, 2 * mm),
            p("Full-stack · AI/RAG · Infrastructure", ITEM_META),
            Spacer(1, 3 * mm),
            bullet("Cloud Run 인스턴스마다 OCR 작업 상태가 사라지던 원인을 메모리 저장소로 좁히고, 공용 DB 상태 저장소로 전환해 관련 테스트 65건 통과"),
            bullet("Cloudflare R2 직접 멀티파트 업로드에 파트 순서·ETag·실제 크기 검증을 적용해 Cloud Run을 우회하며 최대 8GB 파일 처리"),
            bullet("Jina v4와 Medical BGE-M3의 pgvector 검색 결과를 RRF로 결합하고, Vast.ai 의료 LLM 5종과 후속 질문 문맥 유지 흐름을 연결"),
            Spacer(1, 3 * mm),
            tag_line("FASTAPI · POSTGRESQL/PGVECTOR · RAG/RRF · CLOUD RUN · CLOUDFLARE R2"),
        ]
    )

    story.append(PageBreak())

    story.extend(
        [
            section_heading("Selected Project 02"),
            Spacer(1, 5 * mm),
            item_header("크런치 · 프리랜서 중개 플랫폼", "2026.04 - 2026.07", "12주 · Team Lead"),
            Spacer(1, 2 * mm),
            p("권한·결제·정산 상태를 연결해 거래 무결성을 확보한 웹 서비스", ITEM_SUMMARY),
            Spacer(1, 3 * mm),
            bullet("클라이언트·프리랜서·관리자 3개 역할과 14개 도메인의 사용자 흐름을 설계하고 85개 REST API를 연동"),
            bullet("NICEPAY 예치금·잔금 2단계 결제에서 서버 금액 재검증과 Prisma Transaction을 적용해 결제부터 정산까지 데이터 일관성 확보"),
            bullet("Socket.IO·WebRTC 기반 12종 실시간 이벤트와 15개 협업 API를 구현하고, GitHub Actions 4개 워크플로로 품질·빌드·보안 검증 자동화"),
            Spacer(1, 3 * mm),
            tag_line("NODE.JS · TYPESCRIPT · EXPRESS · PRISMA · MYSQL · REACT"),
            Spacer(1, 8 * mm),
            section_heading("Additional Work"),
            Spacer(1, 5 * mm),
        ]
    )

    additional = Table(
        [
            [
                p("MineNews", ITEM_TITLE),
                p(
                    "형태가 다른 게임 스냅샷을 정규화하고 외부 이미지 API 프록시·캐시를 적용해 안정적인 주간 데이터 읽기 경험을 구현",
                    COMPACT,
                ),
            ],
            [
                p("스파르타 유틸리티", ITEM_TITLE),
                p(
                    "주차별 영상 시간을 동적 입력받아 초 단위로 정규화하고 예상 정산 금액을 계산하는 React 업무 자동화 도구 구현",
                    COMPACT,
                ),
            ],
        ],
        colWidths=[42 * mm, 124 * mm],
    )
    additional.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LINEBELOW", (0, 0), (-1, -2), 0.5, LINE),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (0, -1), 10),
                ("RIGHTPADDING", (1, 0), (1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 8),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
            ]
        )
    )
    story.extend([additional, Spacer(1, 7 * mm), section_heading("Core Skills"), Spacer(1, 5 * mm)])

    skill_rows = [
        ("Backend", "Python · FastAPI · Node.js · TypeScript · Express · REST API"),
        ("Data / AI", "PostgreSQL · pgvector · MySQL · Prisma · Pandas · OCR · RAG"),
        ("Frontend / Infra", "React · Next.js · Cloud Run · Cloudflare R2 · GitHub Actions · AWS EC2"),
    ]
    skills = Table(
        [[p(label, LABEL), p(value, COMPACT)] for label, value in skill_rows],
        colWidths=[35 * mm, 131 * mm],
    )
    skills.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("BACKGROUND", (0, 0), (0, -1), ACCENT_SOFT),
                ("BOX", (0, 0), (-1, -1), 0.6, LINE),
                ("INNERGRID", (0, 0), (-1, -1), 0.4, LINE),
                ("LEFTPADDING", (0, 0), (-1, -1), 8),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8),
                ("TOPPADDING", (0, 0), (-1, -1), 6),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
            ]
        )
    )
    story.extend([skills, Spacer(1, 6 * mm)])

    ai_box = Table(
        [
            [
                p("AI-assisted workflow", LABEL),
                p(
                    "Codex를 로그·코드 분석, 설계 대안 검토, 회귀 테스트와 문서화에 활용. 제안 결과는 구현 코드·자동화 테스트·배포 환경에서 직접 검증 후 반영",
                    COMPACT,
                ),
            ]
        ],
        colWidths=[39 * mm, 127 * mm],
    )
    ai_box.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("BACKGROUND", (0, 0), (-1, -1), PANEL),
                ("BOX", (0, 0), (-1, -1), 0.6, LINE),
                ("LEFTPADDING", (0, 0), (-1, -1), 8),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8),
                ("TOPPADDING", (0, 0), (-1, -1), 7),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
            ]
        )
    )
    story.extend([ai_box, Spacer(1, 7 * mm), section_heading("Education & Credentials"), Spacer(1, 5 * mm)])

    education = Table(
        [
            [p("가천대학교", ITEM_SUMMARY), p("게임·영상학과 · 재학", COMPACT), p("2023.03 - 2028.03 예정", SMALL)],
            [p("글로벌아카데미", ITEM_SUMMARY), p("생성형 AI 기반 문서인식·분류 자동화 시스템 개발", COMPACT), p("2026.07 - 2026.09", SMALL)],
            [p("자격", ITEM_SUMMARY), p("SW개발_L3_20V1 · 웹디자인개발기능사", COMPACT), p("한국산업인력공단", SMALL)],
        ],
        colWidths=[39 * mm, 90 * mm, 37 * mm],
    )
    education.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LINEBELOW", (0, 0), (-1, -2), 0.5, LINE),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (0, -1), 8),
                ("RIGHTPADDING", (1, 0), (1, -1), 8),
                ("RIGHTPADDING", (2, 0), (2, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 6),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
                ("ALIGN", (2, 0), (2, -1), "RIGHT"),
            ]
        )
    )
    story.extend([education, Spacer(1, 5 * mm), p("상세 구현 과정과 트러블슈팅은 포트폴리오의 각 프로젝트에서 확인할 수 있습니다.", SMALL)])

    return story


def main() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        leftMargin=22 * mm,
        rightMargin=22 * mm,
        topMargin=18 * mm,
        bottomMargin=19 * mm,
        title="홍인성 이력서",
        author="홍인성",
        subject="Full-stack Web Developer Resume",
    )
    doc.build(build_story(), onFirstPage=draw_footer, onLaterPages=draw_footer)
    PUBLIC_RESUME.parent.mkdir(parents=True, exist_ok=True)
    copy2(OUTPUT, PUBLIC_RESUME)
    print(OUTPUT)


if __name__ == "__main__":
    main()
