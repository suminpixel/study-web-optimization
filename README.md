# study-web-optimization
# 리액트 웹 최적화 (rendering, loading optimization) 스터디

### 프론트엔드 웹 최적화 주요 개념
- 로딩 속도 최적화
- 페이지 랜더링 최적화 


### 탐색 방법
- Chrome Dev tools (Lighthouse) 활용하여 어드바이스, 퍼포먼스 탭을 이용하여 병목구간 확인


### 개선 방법
1. 이미지 / 리소스 최적화 
- Image Processing CDN 
이미지를 서버 내 원본이미지의 사이즈나 확장자를 변경하여 가공한채로 사용자에게 전송

* CDN : 원격지에 있는 서버(Origin Server)로 부터 사용자와 가까운 곳에 위치한 Cache Server에 해당 Content를 캐싱하고 Content 요청시에 Cache Server가 응답을 주는 기술입니다.
* 캐싱: 데이터나 값을 서버나 브라우저의 임시 스토리지에 저장하는것

2.	단순 코드 병목현상 해결
 - 현재 로직보다 효율적으로 처리하는 방법 찾기 (라이브러리 활용)
 - 작업의 양 줄이기(반복문 지양, 짧은 코드 지향) 

3.	코드 스플리팅
특히 리액트 웹에서 번들링 된 코드들을 불필요한 코드 또는 중복된 코드 없이 적절한 사이즈로 스플리팅하여 적절한 타이밍에 순차적으로 로드

- 참고 자료 : https://www.inflearn.com/course/%EC%9B%B9-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94-%EB%A6%AC%EC%95%A1%ED%8A%B8-1/dashboard


