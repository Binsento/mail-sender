import React from 'react'
// import './sender.css'
import DropLoader from './DropLoader'
import { InfoForm, SubjectForm } from './InputForm'
import TextareaForm from './TextareaForm'
import FileList from './FileList'
import FileForm from './FileForm'
import SendButton from './SendButton'

const SendingForm = () =>
    <section className='sender'>
        <DropLoader>
            <p className = 'sender__title'>Отправлялка сообщений</p>
            <span>От кого</span>
            <div className='sender__line'>
                <InfoForm id='fromName' placeholder='Имя' position = 'left' />
                <InfoForm type='email' id='fromEmail' placeholder='Email' position = 'right' />
            </div>
            <span>Кому</span>
            <div className='sender__line'>
                <InfoForm id='toName' placeholder='Имя' position = 'left' />
                <InfoForm type='email' id='toEmail' placeholder='Email' position = 'right' />
            </div>
            <span>Тема письма</span>
            <SubjectForm id='subject' />
            <span>Сообщение</span>
            <TextareaForm id='message' />
            <FileList />
            <FileForm id = 'uploader'/>
            <SendButton />
        </DropLoader>
    </section>

export default SendingForm