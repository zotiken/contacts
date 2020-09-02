import React from "react";
import "./ItemList.scss";
import Button from "../../components/Button/Button";
import edit from '../../images/edit-24px.svg'

export default function ItemList(props) {
  const item = props.item;
  return (
    <li className="item">
      {/* <span className="item__id">{item.id}</span> */}
      <div className='item__container'>
        <span className="item__name"><i>Имя:</i> {item.name}</span>
        <span className="item__email"><i>Почта:</i> {item.email}</span>
        <span className="item__phone"><i>Тел:</i> {item.phone}</span>
      </div>
      <Button icon={edit} onClick={() => props.setmodal({id:item.id})}>Редактировать</Button>
    </li>
  );
}
