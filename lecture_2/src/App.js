import React, { useState, Suspense, lazy, useCallback } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import InfoTable from './components/InfoTable'
import SurveyChart from './components/SurveyChart'
import Footer from './components/Footer'
import ImageModal from './components/ImageModal'


const LazyImageModal = lazy(()=> import('./components/ImageModal'));

function App() {
    
    const [showModal, setShowModal] = useState(false)
    const [modal, setModal] = useState(LazyImageModal)
    
    const handleMouseEnter = useCallback(() => {
        console.log('d')
        //import('./components/ImageModal')
    },[])

    return (
        <div className="App">
            <Header />
            <InfoTable />
            {
                /**
                 * as-is : 모달 
                 * to-be : onMouseEnter() 속성으로 사용자가 마우스 가져다 대었을때 
                 *          혹은 useEffect 에서 프리로드
                 *          혹은 lazyWithPreload() 매서드를 별도로 만듬
                 */
            }
            <ButtonModal 
                onMouseEnter={handleMouseEnter}
                onClick={() => { setShowModal(true) }}>올림픽 사진 보기</ButtonModal>
            <SurveyChart />
            <Footer />
            <Suspense fallback={null}>
                {showModal ? <ImageModal closeModal={() => { setShowModal(false) }} /> : null}
            </Suspense>
        </div>
    )
}

const ButtonModal = styled.button`
    border-radius: 30px;
    border: 1px solid #999;
    padding: 12px 30px;
    background: none;
    font-size: 1.1em;
    color: #555;
    outline: none;
    cursor: pointer;
`

export default App
