import cl from "./Btn.module.css";

export default function TodoBtn(props) {
  return (
    <>
      <button className={cl.todo_btn} {...props} />
    </>
  );
}
