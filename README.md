<img width="800" alt="paranoia_시작화면" src="https://user-images.githubusercontent.com/107898608/228829164-6eebba82-b0c0-46a7-8677-284a609d398b.png">

## 📌 프로젝트 소개

<aside>
🎮 플레이어가 한 건물 내에서 일어나는 기이한 사건을 해결하고 탈출하는 2D 공포 쯔꾸르 게임

</aside>

- 게임 엔진 없이 Vanilla Js로만 게임 동작 구현
- HTML5의 canvas로 게임 그래픽 구현
- Tiled를 사용하여 맵 제작

<br/>

## 📍개발 환경

- JavaScript
- HTML
- CSS

<br/>

## 🔗 Link

**Team Github** [https://github.com/jinnyl22/22lim](https://github.com/jinnyl22/22lim)

**Team Notion** [22임](https://www.notion.so/22-b0824f57da8e44209e448fc7fcc26f46) 

**기획서**  [[1차] 1번에 고정! 전체적인 진행상황(계속 업데이트)](https://www.notion.so/1-1-37db9d853ee0408dbb75247ad84bc3fc) 

<br/>

## 💁🏻‍♀️ 팀원 소개

| 이름 | 담당 파트 |
| --- | --- |
| [팀장]이수진 | 전체 및 오브젝트 |
| 이지니 | 플레이어 관련 |
| 임준우 | 맵 관련 |

<br/>

## ✔️ 주요 기능

### 👀 플레이 영상

[https://drive.google.com/file/d/1vldIHelTOcdA1_nb0_osRj9nALanbNtC/view?usp=share_link](https://drive.google.com/file/d/1vldIHelTOcdA1_nb0_osRj9nALanbNtC/view?usp=share_link)

- **게임 맵 제작**
    1. Tiled 에디터를 사용하여 맵, 오브젝트 제작 후 json으로 뽑음
    
    <img width="600" alt="타일맵 스크린샷" src="https://user-images.githubusercontent.com/107898608/228829373-e9fbdecd-3f40-46e9-b02a-0ca79dc66712.png">
    

- **캐릭터 스프라이트 및 래이캐스트**
- **맵 및 충돌 구현**
    
    <img width="600" alt="paranoia_충돌,래이캐스트" src="https://user-images.githubusercontent.com/107898608/228829427-349f3be2-9e3a-4220-894f-c76e07bffd3a.png">
    
    파란색으로 표시된 부분이 래이캐스트
    

- **맵 변경 이벤트**
    1. 게시판을 2번 확인하면 맵 UI 변경
        
        <img width="600" alt="paranoia_게시판1" src="https://user-images.githubusercontent.com/107898608/228829521-e88f2625-fffe-484f-b752-37ddd65d27e8.png">
        
        <img width="600" alt="paranoia_게시판2" src="https://user-images.githubusercontent.com/107898608/228829546-0d029c5f-fc46-4718-9f96-72e428c7ca4d.png">
        
    
- **오브젝트 상호작용**
    
    <img width="600" alt="paranoia_상호작용" src="https://user-images.githubusercontent.com/107898608/228829604-a4a3fd8c-11dd-4556-ad7c-5d4d4acca554.png">
    
- **게임오버 포인트**
    1. 게임 시작하자마자 칼이 날아오는데 피하지 못하면 게임 오버
        
        <img width="600" alt="paranoia_칼 날아옴" src="https://user-images.githubusercontent.com/107898608/228829647-f729e9e5-7c86-4a86-b60e-40c4d88ed242.png">
        
    2. 게임 시작 후 다시 문으로 나가려고 하면 게임 오버
        
        <img width="600" alt="paranoia_문 송곳" src="https://user-images.githubusercontent.com/107898608/228829685-f7d7c009-b380-4bd3-8ef4-b7794f74e8ea.png">
        

- **다음 스테이지 퀴즈**
    1. 힌트를 찾아 정답을 입력하면 다음 스테이지로 이동
        
        <img width="600" alt="paranoia_퀴즈" src="https://user-images.githubusercontent.com/107898608/228829730-330ea69f-bfb5-47a5-8e9d-95aaa003ce32.png">
        

- **인벤토리, 설정창, 세이브 포인트**
    1. 인벤토리
        
        <img width="600" alt="paranoia_인벤토리" src="https://user-images.githubusercontent.com/107898608/228829780-20c3764f-8438-4335-b6f4-29d795be8084.png">

        
    2. 구급약을 사용해 세이브 포인트에서 저장
        
        <img width="600" alt="paranoia_세이브포인트" src="https://user-images.githubusercontent.com/107898608/228829839-7de5abdf-f755-4cf6-b10d-39f58cc4c5b0.png">
