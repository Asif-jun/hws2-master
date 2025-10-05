import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

type SuperButtonPropsType = DefaultButtonPropsType & {
  xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = ({
  xType,
  className,
  disabled,
  ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
}) => {
  const finalClassName = [
    s.button, // базовый класс всегда
    disabled ? s.disabled : '', // класс для дизэйбла
    xType === 'red' ? s.red : '', // класс для красной кнопки
    xType === 'secondary' ? s.secondary : '', // класс для secondary
    className, // кастомный класс, если есть
  ]
    .filter(Boolean)
    .join(' ') // убираем пустые строки и объединяем через пробел

  return (
    <button
      disabled={disabled}
      className={finalClassName}
      {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
    />
  )
}

export default SuperButton
