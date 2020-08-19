# study-web-optimization
# 리액트 웹 최적화 (rendering, loading optimization) 스터디

### 프론트엔드 웹 최적화 주요 개념
- 로딩 속도 최적화
- 페이지 랜더링 최적화 
- 프로덕션 빌드(개발환경이 아닌) 에서의 성능 최적화 
<br>

### 탐색 방법
- Chrome Dev tools (Lighthouse) 활용하여 어드바이스, 퍼포먼스 탭을 이용하여 병목구간 확인
<br>

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
특히 리액트 웹에서 번들링 된 코드들을 불필요한 코드 또는 중복된 코드 없이 '적절한 사이즈'로 스플리팅하여 '적절한 타이밍'에 순차적으로 로드
- 리액트의 경우 웹팩설정을 통해 코드스플리팅 적용 가능
- bundle-analyzer 등을 활용하여 크기가 큰 번들만 별도로 Lazy Loading 하는 방법 적용 

4. Lazy Loading (React)
특정 컴포넌트를 런타임 도중 원하는 시점에 로드
 - const LazyCompo = lazy(()=> import('./Component'))
 - <Suspense fallback={어떤 페이지도 로드되지 않았을 때 랜더링할 컴포넌트 }> ... </Suspense>

5. 리소스 텍스트 압축
서버로부터 문서 리소스(Text) 클라이언트로 서비스 할 때 압축(content-encoding) 하여 제공
압축을 푸는데도 자원이 소모 되기 때문에 무분별하게 압축을 풀 것이 아니라, 
특정 용량(2kB)을 기준으로 
- GZIP 
- Deflate 


* 참고 자료 : https://www.inflearn.com/course/%EC%9B%B9-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94-%EB%A6%AC%EC%95%A1%ED%8A%B8-1/dashboard


