# [KoreanAir-IFE](https://www.koreanair.com/plan-your-travel/in-flight-experience/entertainment)

## In-Flight Entertainment of Korean Air.
<img src="https://aircraft.airbus.com/sites/g/files/jlcbta126/files/styles/airbus_480x480/public/2022-09/A321neo_Front.webp?itok=3HxHqBnA" width="450px" height="300px" title="Airbus321 neo" alt="Airbus321 neo"></img><br/>

## Date
> ### 2024.11.14 ~ 2024.11.17 : I personally Checked by boarding the A321-272NX of Korean Air (KE189, KE190).
> ### 2024.11.18 ~ 2024.11.18 : Finished Plans
> ### 2024.11.18 ~ : Start the Coding

## Links
https://www.figma.com/design/8j2RW1ZwYfJy5gWv3Ky7Dq/Figma-basics?node-id=1669-162202&node-type=canvas&t=qW6jmnSWsTaq6F6X-0


## Structure
> start page, select-language page, maing page, header page, etc


## Code Languages List
> ### 백엔드 개발
* Languages : Node.js
  * 비동기 처리와 스트리밍 서버 구현, API 개발.
    * [ 작업 내용 ]
    > * RESTful API 설계 및 개발 (영화, 음악, 사용자 세션 관리).
    > * 스트리밍 서버 구현(HLS/MPEG-DASH).
    > * 데이터베이스와의 연결 (MySQL 또는 MongoDB).
    * [ Use? ]
    > * Express.js (Node.js 프레임워크)
    > * Postman (API 테스트)
    > * MySQL Workbench (데이터베이스 설계)
    * [ 초기 학습 ]
    > * Node.js 비동기 프로그래밍.
    > * REST API 설계 및 보안(TLS/HTTPS).
    > * Streaming 라이브러리: FFmpeg, Multer.

> ### 프론트엔드 개발
* Languages : React.js (JavaScript)
  * 동적인 사용자 인터페이스와 SPA(Single Page Application) 구현, IFE 시스템처럼 반응형 UI
    * [ 작업 내용 ]
    > * 메인 화면: 비행 정보, 영화/음악 목록.
    > * 콘텐츠 재생 페이지: 스트리밍 플레이어(HLS.js 사용).
    > * 음식 주문 UI 등 동적 인터페이스 구성.
    * [ Use? ]
    > * VS Code (코드 에디터)
    > * Figma (UI 디자인)
    > * React Developer Tools (브라우저 확장 프로그램)
    * [ 초기 학습 ]
    > * React 컴포넌트 구조 설계.
    > * HLS.js를 활용한 스트리밍 플레이어 개발.
    > * Axios를 사용한 API 호출.

> ### 데이터베이스
* Languages : SQL (MySQL)
  * 관계형 데이터베이스에서 사용자 정보, 항공 데이터, 콘텐츠 메타데이터를 효율적으로 관리
    * [ 작업 내용 ]
    > * 데이터베이스 설계: 테이블(영화, 음악, 사용자, 주문 등) 생성.
    > * 데이터 CRUD(생성, 읽기, 업데이트, 삭제) 기능 구현.
    > * 서서버와 연동(Node.js Sequelize ORM 사용).
    * [ Use? ]
    > * MySQL Workbench (시각화 툴)
    > * Sequelize (Node.js ORM)
    * [ 초기 학습 ]
    > * 데이터베이스 정규화.
    > * MySQL 쿼리 작성.
    > * Sequelize를 통한 DB 연동.

> ### 스트리밍 및 멀티미디어
* Languages : C++
  * FFmpeg 기반의 멀티미디어 처리 및 스트리밍 서버 구현.
    * [ 작업 내용 ]
    > * FFmpeg을 활용하여 동영상/음악 파일을 HLS 또는 DASH로 변환.
    > * Node.js 서버와 연동하여 실시간 스트리밍 제공.
    > * DRM(디지털 권리 관리) 구현.
    * [ Use? ]
    > * FFmpeg (미디어 처리 도구)
    > * VLC Player (스트리밍 테스트)
    > * GStreamer (고급 멀티미디어 처리)
    * [ 초기 학습 ]
    > * FFmpeg 명령어 사용법.
    > * HLS, DASH 스트리밍 프로토콜 이해.
    > * DRM 구현 방법(Widevine, PlayReady 등).

> ### 보안
* Languages : Python
  * SSL/TLS 구현 및 DRM 관련 암호화 작업을 효율적으로 처리
    * [ 작업 내용 ]
    > * HTTPS(TLS) 서버 인증서 설정.
    > * 콘텐츠 암호화(예: AES) 및 DRM 구현.
    > * 사용자 로그인 시스템(비밀번호 암호화, 세션 토큰).
    * [ Use? ]
    > * OpenSSL (TLS/SSL 인증서 생성)
    > * Flask (Python 웹 프레임워크)
    * [ 초기 학습 ]
    > * Python의 cryptography 라이브러리.
    > * JWT(JSON Web Token)를 활용한 인증.

> ### 네트워크
* Languages : Go (Golang)
  * 네트워크 프로그래밍과 높은 동시성을 요구. 기내 Wi-Fi 시스템과 같은 네트워크 중심 작업.
    * [ 작업 내용 ]
    > * 스트리밍 트래픽을 처리할 네트워크 서버 개발.
    > * WebSocket을 활용해 실시간 데이터(비행 정보, 채팅 등) 송수신.
    > * 네트워크 속도 및 안정성 테스트.
    * [ Use? ]
    > * Wireshark (네트워크 패킷 분석)
    > * Nginx (역방향 프록시 및 로드 밸런싱)
    * [ 초기 학습 ]
    > * Go 언어의 Goroutine 및 채널 구조.
    > * WebSocket 프로토콜 이해.
    > * 네트워크 로깅 및 성능 최적화.

> ### 임베디드 소프트웨어
* Languages : C
  * 저수준 하드웨어 제어와 RTOS 기반 시스템 개발에 최적화, 항공 표준(DO-178C)을 준수.
    * [ 작업 내용 ]
    > * 좌석 스크린과 컨트롤러 개발.
    > * RTOS 기반 소프트웨어 설계.
    > * 항공 표준(DO-178C)에 따른 소프트웨어 작성.
    * [ Use? ]
    > * Keil MDK (C 개발 환경)
    > * QEMU (임베디드 하드웨어 시뮬레이터)
    * [ 초기 학습 ]
    > * 임베디드 C 프로그래밍.
    > * RTOS 사용법.
    > * UART/I2C 통신 프로토콜 이해.

> ### UI/UX 디자인 도구
* Languages : Dart (Flutter)
  * Flutter를 사용하면 iOS, Android, 웹 기반 인터페이스를 동시에 지원하며, 탑승객의 다양한 디바이스에서 호환 가능한 인터페이스를 구현할 수 있음.
    * [ 작업 내용 ]
    > * UI/UX 설계 및 구현
    > * 반응형 디자인
    > * 인터랙션 추가
    > * API 연동 (RESTfulk API
    > * 다국어 지
    * [ Use? ]
    > * Flutter 개발 환경
    > * Figma (UI 디자인)
    * [ 초기 학습 ]
    > * Flutter 와 Dart 기본.
    > * API 연동.
    > * 상태 관리 Provier 또는 Riverpod.
    > * 반응형 디자인 MEdiaQuery 와 Flexible.
    > * UI/UX 애니메이션.

> ### 운영 및 배포
* Languages 언어: Shell Script (Bash)
  * 서버 설정, 파일 배포, 데이터 마이그레이션 등 자동화 작업.
    * [ 작업 내용 ]
    > * 서버 초기화 및 설정 스크립트 작성.
    > * Docker를 활용한 IFE 시스템 컨테이너화.
    > * CI/CD 파이프라인 구축(GitHub Actions).
    * [ Use? ]
    > * Docker & Docker Compose.
    > * Jenkins (CI/CD 도구).
    > * Ansible (자동화 관리 도구).
    * [ 초기 학습 ]
    > * Bash 스크립트 작성법.
    > * Docker 이미지 생성 및 관리.
    > * 자동화된 배포 설정.

## Sequence
1단계: 프로젝트 기획 및 아키텍처 설계
목표: 전체 시스템 구조와 기능 정의
작업 내용:
주요 기능 정의: 콘텐츠 스트리밍, 비행 정보, 음식 주문 등 IFE 기능 정리.
아키텍처 설계: 백엔드-프론트엔드 통합 구조, 데이터베이스 설계, 스트리밍 서버 위치 결정.
UI/UX 와이어프레임 정리: Figma에서 화면별 기능 흐름 설계.
다음 단계로 넘어가는 조건:
UI 설계(와이어프레임) 완성.
데이터 흐름과 API 요구 사항 문서화 완료.
2단계: 데이터베이스 설계 및 구축
목표: 콘텐츠와 사용자 데이터를 저장할 DB 설계
작업 내용:
데이터베이스 테이블 설계: 사용자 정보, 영화/음악 데이터, 주문 내역 등.
데이터 관계 정의: 콘텐츠와 사용자의 상호작용 연결.
MySQL 또는 MongoDB 구축 및 초기 샘플 데이터 삽입.
도구: MySQL Workbench, MongoDB Compass
다음 단계로 넘어가는 조건:
DB 스키마와 테이블이 설계되고, 샘플 데이터가 삽입되어 API와 연동 가능.
3단계: 백엔드 API 개발
목표: 데이터 제공 및 처리 로직 구현
작업 내용:
Node.js와 Express.js로 서버 환경 설정.
RESTful API 설계 및 개발:
GET /movies → 영화 데이터 반환
POST /orders → 음식 주문 데이터 저장
데이터베이스 연동(Sequelize 또는 Mongoose).
JWT를 활용한 사용자 인증 시스템 구축.
도구: Postman(API 테스트), Sequelize
다음 단계로 넘어가는 조건:
모든 API가 데이터베이스와 연동되어 정상 작동.
4단계: UI/UX 개발 (Flutter)
목표: 사용자 인터페이스 구축
작업 내용:
Figma에서 설계한 화면을 Flutter로 구현.
화면별 API 연동:
콘텐츠 목록 화면(GET /movies)
영화 재생 화면(스트리밍 URL 사용)
반응형 UI 설계(MediaQuery, LayoutBuilder 사용).
다국어 지원 및 상태 관리(Provider 사용).
도구: Android Studio, Visual Studio Code
다음 단계로 넘어가는 조건:
주요 화면이 Flutter에서 렌더링되고 API로 데이터 수신 가능.
5단계: 스트리밍 서버 구축
목표: 콘텐츠 스트리밍 환경 구성
작업 내용:
FFmpeg로 영화/음악 파일을 HLS 또는 DASH 형식으로 변환.
Node.js 기반 스트리밍 서버 구축:
클라이언트 요청에 따라 미디어 파일 전송.
DRM(디지털 권리 관리) 설정(Widevine 또는 PlayReady).
도구: FFmpeg, VLC Player(테스트)
다음 단계로 넘어가는 조건:
스트리밍 서버에서 콘텐츠를 정상적으로 재생 가능.
6단계: 보안 설정
목표: 사용자 데이터와 콘텐츠 보호
작업 내용:
HTTPS 인증서(OpenSSL) 설정.
API 요청 보안: JWT 및 CORS 설정.
콘텐츠 암호화: DRM 적용 및 API 인증.
도구: OpenSSL, Postman
다음 단계로 넘어가는 조건:
모든 API 및 스트리밍 요청이 HTTPS로 보호됨.
7단계: 네트워크 설정
목표: 기내 네트워크와 시스템 통합
작업 내용:
로컬 네트워크 환경 설정: Wi-Fi AP 및 기내 디바이스 연결.
네트워크 속도 테스트 및 최적화.
로드 밸런싱 설정(Nginx 사용).
도구: Wireshark, Nginx
다음 단계로 넘어가는 조건:
IFE 시스템이 네트워크 환경에서 안정적으로 작동.
8단계: 통합 및 테스트
목표: 전체 시스템 통합 및 기능 테스트
작업 내용:
백엔드-프론트엔드-스트리밍 서버 연동.
기내 시나리오 기반 테스트:
영화 재생, 비행 정보 확인, 음식 주문 등.
디버깅 및 최적화.
도구: Cypress(테스트 자동화), Flutter 테스트 도구
다음 단계로 넘어가는 조건:
모든 주요 기능이 오류 없이 작동.
9단계: 운영 및 배포
목표: 실제 환경에서 시스템 배포 및 유지보수
작업 내용:
Docker로 시스템 컨테이너화.
CI/CD 파이프라인 설정(GitHub Actions).
유지보수를 위한 로그 시스템 구축.
도구: Docker, Jenkins
완료 조건:
시스템이 안정적으로 운영되며, 유지보수 가능.
