import React from "react"

import python from "../../img/python.png"
import github from "../../img/github.png"
import vscode from "../../img/vscode.png"
import django from "../../img/django.png"
import react from "../../img/react.png"
import css from "../../css/profileCss.css"

export class Profile extends React.Component{
    render (){
        return (
            <div id="profile">
            <h1>profile</h1>
            <h1>自己紹介</h1>
            <p>はじめまして。私の名前は長田瑛綺と言います。</p>
            <p>2020年現在21歳で京都産業大学、情報理工学部の３回生です。</p>
            <p>使用経験のある言語としましては、html/css, JavaScript, Python, その他 CやJavaなど</p>
            <p>最近は機械学習に興味があり、そのアルゴリズムなどについて勉強しています。</p>
            <p>さらに、まだ経験はありませんが今後はロボットなどのよりハードウェアに近い分野の勉強もしたいと思っています。</p>
    
            <h1>よく使う技術&ソフトウェア</h1>
            <img src={python} className="item-icon" />
            <img src={django} className="item-icon" />
            <img src={github} className="item-icon" />
            <img src={vscode} className="item-icon" />
            <img src={react} className="item-icon" />
          </div>
            )
    }
}