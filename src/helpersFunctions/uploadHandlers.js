export const readFile = file => new Promise((resolve)=> {
    const { name, size} = file
    const reader = new FileReader()
    reader.onload = () => {
        let content = reader.result
        resolve([name, size, content])
    }
    reader.readAsDataURL(file)
})

export const checkFile = (file, filenames = [], overallSize = 0) => {
    let allowed = ['jpg', 'png', 'jpeg', 'gif', 'pdf', 'doc', 'docx', 'xls', 'xlsx', 'rtf', 'zip']
    if (!allowed.includes(file.name.split('.').pop())) {
        return new Error(`Тип файла ${file.name} не поддерживается`)
    }
    if (file.size > 5242880) {
        return new Error(`Размер файла ${file.name} превышает 5мб`)  
    }
    if (overallSize + file.size > 20971520) {
        return new Error('Общий размер файлов превышает 20мб')  
    }
    if (filenames.includes(file.name)) {
        return new Error(`Файл с именем ${file.name} уже загружен`)  
    }
    return false
}

// менее читаемый вариант, просто для демонстрации))
//const checkFile = (file, filenames = [], overallSize = 0) => {
//     let allowed = ['jpg', 'png', 'jpeg', 'gif', 'pdf', 'doc', 'docx', 'xls', 'xlsx', 'rtf', 'zip']
//     return (
//         (!allowed.includes(file.name.split('.').pop()) && Error(`Тип файла ${file.name} не поддерживается`)) ||
//         (file.size > 5242880 && new Error(`Размер файла ${file.name} превышает 5мб`)) ||
//         (overallSize + file.size > 20971520 && new Error('Общий размер файлов превышает 20мб')) ||
//         (filenames.includes(file.name) && new Error(`Файл с именем ${file.name} уже загружен`)) ||
//         false)
// }