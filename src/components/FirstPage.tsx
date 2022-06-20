import React, { Component } from 'react'

type Props = {}

type State = {}

export default class FirstPage extends Component<Props, State> {
  state = {}

  private entranceValue = false;
  private logValue = false;

  render() {
    return (
        <div className="root1">
            <div className="clock"></div>
            <div className="picture">
                <div className="message">'You have been successfully registered'</div>
                <div className="pictureContent pictureFirstContent1">Would you like to learn how to play the piano?</div>
                <div className="pictureContent pictureFirstContent2">You can achieve your dreams with us!</div>
                <div className="pictureContent pictureFirstContent3">
                    <div className="buttonWrapper">
                        <div className="button buttonLogOn">Log 0n</div>
                        <div className="button buttonLogIn">Log in</div>
                    </div>
                </div>
                <div className="pictureShadow"></div>
            </div>
        </div>
    )
  }
}