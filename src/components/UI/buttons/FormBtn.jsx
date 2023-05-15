import cl from './Btn.module.css'

export default function FormBtn(props){
    return <>
    <button className={cl.form_btn} {...props}/>
    </>
}