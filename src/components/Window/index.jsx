import React from 'react'
import './styles.scss'

const Window = React.memo(({ uuid, window, windows, setWindows }) => {
    const {maximized, from, body, to, subject, date } = window;

    // Close email window
    const closeWindow = (e) => {
        e.stopPropagation()
        const uuid = e.currentTarget.dataset.uuid
        const filtered = windows.filter(window => window.uuid !== uuid)
        setWindows(filtered)
    }

    const toggleMaximize = (e) => {
        e.stopPropagation()
        const uuid = e.currentTarget.dataset.uuid
        const modified = windows.map(window => {
            if (window.uuid !== uuid) {
                return window
            }
            return { ...window, maximized: !window.maximized }
        })
        setWindows(modified)
    }


    return (
        <div className={maximized ? "window maximized" : "window"} >
            <header className={"window__header"} data-uuid={uuid} onClick={toggleMaximize}>
                <div className={"window__subject"} data-uuid={uuid} >{subject}</div>
                <div className={"window__maximize"} data-uuid={uuid} onClick={toggleMaximize}>&#128469;</div>
                <div className={"window__close"} data-uuid={uuid} onClick={closeWindow}>&#10006;</div>
            </header>
            <main className={"window__main"}>
                <div className={"window__date"}><strong>Date: </strong>{new Date(date).toLocaleDateString(navigator.language)}</div>
                <div className={"window__from"}><strong>From: </strong>{from}</div>
                <div className={"window__to"}><strong>To:</strong> {to}</div>
                <br />
                <div className={"window__body"}>{body}</div>
                <br />
            </main>
        </div>
    )
}, (prevProps, nextProps) => (prevProps.uuid === nextProps.uuid))

export default Window
