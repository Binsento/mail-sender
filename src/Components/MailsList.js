import React from 'react'
import { statusToResult, statusToClass } from '../helpersFunctions/statusHandlers'


const MailsList = ({ list, deleteFn }) =>
    <section className='sended-messages'>
        <div className='sended-messages__title'>
            <h3>Отправленные сообщения</h3>
            {!!list.length && <div className='sended-messages__remover' onClick={deleteFn}>Очистить</div>}
        </div>
        {!list.length
            ? <p>Сообщения еще не отправлялись</p>
            : <div className='mails'>
                <div className='mails__line mails__line_header'>
                    <div className='mails__row_left'>Дата</div>
                    <div className='mails__row_center'>Тема</div>
                    <div className='mails__row__right'>Статус</div>
                </div>
                <div className='h-line'></div>
                {list.map(elem =>
                    <div key={elem.id} className='mails__line'>
                        <div className='mails__row_left'>{elem.date}</div>
                        <div className='mails__row_center'>{elem.subject}</div>
                        <div className={`mails__row_right${statusToClass(elem.status)}`}
                        >{statusToResult(elem.status)}</div>
                    </div>)}
            </div>}
    </section>

export default MailsList