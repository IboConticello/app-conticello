import React from 'react'
import './Contact.css'

export default function Contact() {
    return (
        <div class="container">
    <div class="row g-0 justify-content-sm-center">
        <div class="px-lg-5 pt-lg-4 pb-lg-3 p-4 w-100">
            <h2 className='contactComingsoon'>Out of Service - COMING SOON</h2>
            <section class="container__contact">
                <div class="background">
                <div class="container-contact">
                <div class="screen">
                    <div class="screen-header">
                    <div class="screen-header-left">
                        <div class="screen-header-button close"></div>
                        <div class="screen-header-button maximize"></div>
                        <div class="screen-header-button minimize"></div>
                    </div>
                    <div class="screen-header-right">
                        <div class="screen-header-ellipsis"></div>
                        <div class="screen-header-ellipsis"></div>
                        <div class="screen-header-ellipsis"></div>
                    </div>
                    </div>
                    <div class="screen-body">
                    <div class="screen-body-item left">
                        <div class="app-title">
                        <span>CONTACT</span>
                        <span>US</span>
                        </div>
                        <div class="app-contact">CONTACT INFO : +54 9 6848 1626</div>
                    </div>
                    <div class="screen-body-item">
                        <div class="app-form">
                        <div class="app-form-group">
                            <input class="app-form-control" autocomplete="off" placeholder="NAME" id="form-name"/>
                        </div>
                        <div class="app-form-group">
                            <input class="app-form-control" autocomplete="off" placeholder="EMAIL" id="form-email"/>
                        </div>
                        <div class="app-form-group">
                            <input class="app-form-control" autocomplete="off" placeholder="CONTACT NO" id="form-contactNumber"/>
                        </div>
                        <div class="app-form-group message">
                            <input class="app-form-control" autocomplete="off" placeholder="MESSAGE" id="form-message"/>
                        </div>
                        <div class="app-form-group buttons">
                            <button class="app-form-button" id="form-cancel">CANCEL</button>
                            <button class="app-form-button f-send" id="form-send">SEND</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                </div>
            </section>
        </div>
    </div>
</div>

    )
}