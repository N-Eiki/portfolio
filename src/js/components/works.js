import React from "react"

export class Works extends React.Component{

    render (){
        return (
            <div id="works">
                <h1>works</h1>
                <h2><a href="https://github.com/N-Eiki/portfolio">ポートフォリオ</a></h2>
                <p className="text">このポートフォリのページのことです。このサイトはReactで書いていて、GitHubで公開しています</p>
                <h2><a href="https://github.com/N-Eiki/favoritebook">Faborite Book</a></h2>
                <p className="text">このアプリはDjangoを用いて作成しました。詳しくはリンク先からご覧ください。</p>
            </div>
        )
    }
}