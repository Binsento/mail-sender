const makeLetter = (obj) => ({
    action: 'issue.send.test',
    letter: {
        subject: obj.subject || 'Без темы',
        'from.name': obj.fromName,
        'from.email': obj.fromEmail,
        'to.name': obj.toName,
        message: { text: obj.message || '' },
        attaches: obj.attaches
    },
    sendwhen: 'test',
    mca: [
        obj.toEmail
    ]
})

export default makeLetter