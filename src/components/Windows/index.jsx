import React from 'react'
import ReactDOM from 'react-dom'
import './styles.scss'
import Window from '../Window'

const Windows = React.memo(({ windows,pass, setWindows }) => {
    const windowsEl = document.getElementById('windows-root');
    const W = () => (
        <>
            {windows.map(window => {
                return <Window
                    key={window.uuid}
                    uuid={window.uuid}
                    window={window}
                    windows={windows}
                    setWindows={setWindows}
                />
            })}
        </>
    )

    return ReactDOM.createPortal(
        <W />,
        windowsEl
    )
}, compare)

function compare(p,n) {
    return false
}
export default Windows