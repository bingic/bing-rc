// Libraries
import React, {forwardRef, ChangeEvent, MouseEvent} from 'react'

// Components
import {Input} from '../Inputs/Input'
import {Button} from '../Button/Composed/Button'

// Styles
import './Pagination.scss'

// Types
import {
  StandardFunctionProps,
  ComponentSize,
  ComponentColor,
  IconFont,
  InputType,
} from '../../Types'

export interface PaginationInputProps extends StandardFunctionProps {
  currentPage: number
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void | undefined
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void
  size?: ComponentSize
}

export type PaginationInputRef = HTMLInputElement
export const PaginationInput = forwardRef<
  PaginationInputRef,
  PaginationInputProps
>(({size = ComponentSize.Small, currentPage = 1, onChange, onClick}, ref) => {
  const iconFont = 'CaretRight'
  const inputStyles = {width: currentPage.toString().length + 6 + 'ch'}

  return (
    <div className="cf-pagination-input--container">
      <div className="cf-pagination-input--item cf-pagination-input--item--padding">
        Go to Page
      </div>
      <Input
        type={InputType.Number}
        onChange={onChange}
        value={currentPage}
        size={size}
        style={inputStyles}
        ref={ref}
        className={'cf-pagination-input__width'}
      />
      <Button
        size={size}
        color={ComponentColor.Tertiary}
        onClick={onClick}
        placeIconAfterText={true}
        icon={IconFont[iconFont]}
        text={'Go'}
      />
    </div>
  )
})

PaginationInput.displayName = 'PaginationInput'
