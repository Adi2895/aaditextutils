import React from 'react'

export default function About(props) {
    
    let myStyle = {
        color : props.mode === 'dark'? 'rgb(55 35 80)' :'white', 
        backgroundColor: props.mode === 'dark'? 'white' :'rgb(30 33 51)',
        textAlign:'center'        
        // border: props.mode === 'dark' ? '1px solid ' : '1px solid black'
    }
    
    return (
        <>
            <div style={{textAlign:'center'}}>
                <h2>{props.head}</h2>
                <div class="my-5" style={myStyle} >
                <div>
                    <h5>Analyze your text</h5>
                </div>
                <div >
                    TextUtils gives you wide numbers of options to manipulate 
                    your text effectively or efficiently.
                </div>
                </div>
                <div class="my-5" style={myStyle}>
                <div>
                    <h5>Free to use</h5>
                </div>
                <div>
                TextUtils is a freely available software that help 
                you to count the number of characters and word in your paragraph and even
                can help in removing extra space and much more.
                </div>
                </div>
                <div class="my-5" style={myStyle}>
                    <div>
                <h5>Browser compatible</h5> 
                </div>
                <div>
                    This word counter software works in any browser like 
                    Chrome, Firefox, Safari, OperaMini, Internet Explorer.
                </div>
                </div>
            </div>
        </>
    )
}




