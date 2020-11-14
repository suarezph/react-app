import React from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSelector = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value)
  }

  return (
    <select onChange={changeLanguage}>
      <option value="en">EN</option>
      <option value="zh-hk">CN</option>
    </select>
  )
}

export default LanguageSelector
