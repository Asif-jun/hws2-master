import React, { useState } from 'react'
import s from './Stand.module.css'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'
import SuperButton from './common/c2-SuperButton/SuperButton'

const Stand = () => {
  const [stateForAllInputs, setValue] = useState<string>('')
  const [error, setError] = useState<string>('')

  const [stateForAllCheckboxes, setChecked] = useState<boolean>(false)

  // состояния текста для каждой кнопки
  const [defaultBtnText, setDefaultBtnText] = useState('Дефолтная')
  const [redBtnText, setRedBtnText] = useState('Опасность')
  const [disabledBtnText, setDisabledBtnText] = useState('Не активна')
  const [secondaryBtnText, setSecondaryBtnText] = useState('Дополнительная')

  return (
    <div id={'hw4-stand'} className={s.stand}>
      <div className={s.inputs}>
        {/* первый инпут */}
        <div>
          <SuperInputText
            id={'hw4-super-input-like-old'}
            value={stateForAllInputs}
            onChange={event => setValue(event.currentTarget.value)}
          />
        </div>

        {/* инпут с ошибкой */}
        <div>
          <SuperInputText
            id={'hw4-super-input-with-error'}
            value={stateForAllInputs}
            onChangeText={setValue}
            error={error}
            onEnter={() => {
              setError(stateForAllInputs.trim() ? '' : 'Error')
              setValue('')
            }}
          />
        </div>
      </div>

      <div className={s.buttons}>
        {/* обычная кнопка */}
        <div>
          <SuperButton
            id={'hw4-super-button-default'}
            onMouseEnter={() => setDefaultBtnText('При наведении')}
            onMouseLeave={() => setDefaultBtnText('Дефолтная')}
            onMouseDown={() => setDefaultBtnText('При нажатии')}
            onMouseUp={() => setDefaultBtnText('При наведении')}
          >
            {defaultBtnText}
          </SuperButton>
        </div>

        {/* красная кнопка */}
        <div>
          <SuperButton
            id={'hw4-super-button-red'}
            xType={'red'}
            onMouseEnter={() => setRedBtnText('При наведении')}
            onMouseLeave={() => setRedBtnText('Опасность')}
            onMouseDown={() => setRedBtnText('При нажатии')}
            onMouseUp={() => setRedBtnText('При наведении')}
          >
            {redBtnText}
          </SuperButton>
        </div>

        {/* дизэйбл */}
        <div>
          <SuperButton id={'hw4-super-button-disabled'} xType={'red'} disabled>
            {disabledBtnText}
          </SuperButton>
        </div>

        {/* secondary */}
        <div>
          <SuperButton
            id={'hw4-super-button-secondary'}
            xType={'secondary'}
            onMouseEnter={() => setSecondaryBtnText('При наведении')}
            onMouseLeave={() => setSecondaryBtnText('Дополнительная')}
            onMouseDown={() => setSecondaryBtnText('При нажатии')}
            onMouseUp={() => setSecondaryBtnText('При наведении')}
          >
            {secondaryBtnText}
          </SuperButton>
        </div>
      </div>

      <div className={s.checkboxes}>
        {/* чекбоксы */}
        <div>
          <SuperCheckbox
            id={'hw4-super-checkbox-with-text'}
            checked={stateForAllCheckboxes}
            onChangeChecked={setChecked}
          >
            Hometask
          </SuperCheckbox>
        </div>
        <div>
          <SuperCheckbox
            id={'hw4-super-checkbox-like-old'}
            checked={stateForAllCheckboxes}
            onChange={e => setChecked(e.currentTarget.checked)}
          />
        </div>
      </div>
    </div>
  )
}

export default Stand
