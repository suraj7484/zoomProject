import React from 'react'

const CreateMeeting = (props) => {
    // console.log(window.location.href.split("=")[1])
    const code = window.location.href.split("=")[1]
    console.log(code)
    // React.useEffect(() => {
    //     if (code) {
    //         f
    //     }
    // }, [code]);
    const hanldleClick = async () => {
        await fetch('http://localhost:3001/api/connectZoom', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code: code }),
        }).then((res) => {
            /* Show success message to user */
            console.log(res)
        }).catch(() => {
            /* Show error message to user */
        });
    }
    return (
        <div className="">
            <button onClick={hanldleClick}>New Meeting</button>
        </div>
    )
}

export default CreateMeeting
