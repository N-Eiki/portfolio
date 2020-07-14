import React from "react"

import python from "../../img/python.png"
import github from "../../img/github.png"
import vscode from "../../img/vscode.png"
import django from "../../img/django.png"
import sklearn from "../../img/sklearn.png"
import tf from "../../img/tf.png"
import html5 from "../../img/html.png"
import react from "../../img/react.png"
import css from "../../css/profileCss.css"

export class Profile extends React.Component{
    render (){
        return (
            <div id="profile">
            <h1>profile</h1>
            <h1>自己紹介</h1>
            <p className="text">はじめまして。私の名前は長田瑛綺と言います。</p>
            <p className="text">2020年現在21歳で京都産業大学、情報理工学部の３回生です。</p>
            <p className="text">使用経験のある言語としましては、html/css, JavaScript, Python, その他 CやJavaなど</p>
            <p className="text">最近は機械学習に興味があり、そのアルゴリズムなどについて勉強しています。</p>
            <p className="text">まだ詳しく勉強していませんが今後はロボットなどのよりハードウェアに近い分野の勉強もしたいと思っています。</p>
    
            <h1>よく使う技術&ソフトウェア</h1>
            <p>
            <img src={python} className="item-icon" />
            <img src={django} className="item-icon" />
            <img src={html5} className="item-icon" />
            <img src={sklearn} className="item-icon" />
            <img src={tf} className="item-icon" />
            <img src={github} className="item-icon" />
            <img src={vscode} className="item-icon" />
            <img src={react} className="item-icon" />
        etc...</p>
          </div>
            )
    }
}