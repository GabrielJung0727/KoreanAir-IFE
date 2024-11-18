# [KoreanAir-IFE](https://www.koreanair.com/plan-your-travel/in-flight-experience/entertainment)

## In-Flight Entertainment of Korean Air.

## Date
> 2024.11.14 ~ 2024.11.17 : I personally Checked by boarding the A321-272NX of Korean Air (KE189, KE190).
> 2024.11.18 ~ : coding start.


## Structure
> start page, select-language page, maing page, header page, etc


## Code Languages List
> ### 백엔드 개발
> Languages : Node.js - 비동기 처리와 스트리밍 서버 구현, API 개발.

> ### 프론트엔드 개발
* Languages : React.js (JavaScript)
  * 동적인 사용자 인터페이스와 SPA(Single Page Application) 구현, IFE 시스템처럼 반응형 UI
    * [ 작업 내용 ]
1. RESTful API 설계 및 개발 (영화, 음악, 사용자 세션 관리).
2. 스트리밍 서버 구현(HLS/MPEG-DASH).
3. 데이터베이스와의 연결 (MySQL 또는 MongoDB).

> ### 데이터베이스
> Languages : SQL (MySQL) - 관계형 데이터베이스에서 사용자 정보, 항공 데이터, 콘텐츠 메타데이터를 효율적으로 관리

> ### 스트리밍 및 멀티미디어
> Languages : C++ - FFmpeg 기반의 멀티미디어 처리 및 스트리밍 서버 구현.

> ### 보안
> Languages : Python - SSL/TLS 구현 및 DRM 관련 암호화 작업을 효율적으로 처리

> ### 네트워크
> Languages : Go (Golang) - 네트워크 프로그래밍과 높은 동시성을 요구. 기내 Wi-Fi 시스템과 같은 네트워크 중심 작업.

> ### 임베디드 소프트웨어
> Languages : C - 저수준 하드웨어 제어와 RTOS 기반 시스템 개발에 최적화, 항공 표준(DO-178C)을 준수.

> ### UI/UX 디자인 도구
> Languages : Dart (Flutter) - Flutter를 사용하면 iOS, Android, 그리고 웹 기반 인터페이스를 동시에 지원, 탑승객의 다양한 디바이스에 호환.

> ### 운영 및 배포
> Languages 언어: Shell Script (Bash) - 서버 설정, 파일 배포, 데이터 마이그레이션 등 자동화 작업.

## Sequence
> 1. 기본 시스템 설계: 백엔드(Node.js)와 데이터베이스(MySQL)로 시작.
> 2. 프론트엔드 구성: React.js로 간단한 UI 생성.
> 3. 스트리밍 서버 구축: FFmpeg로 미디어 콘텐츠 변환 및 스트리밍 테스트.
> 4. 보안 및 네트워크: HTTPS와 사용자 인증 시스템 개발.
> 5. 운영 및 배포: Docker를 통해 IFE 시스템을 컨테이너로 실행.
