import {
	StyledFilter,
	ImageIcon,
	RowContainer,
	DropDown,
	OptionContainer,
	Option,
	Checked,
} from './filter.styled'
import { SubTitle } from '../../../subTitle/subTitle'
import downArrow from '../../../../assets/images/png/downArrow.png'
import React, { useState } from 'react'
import checked from '../../../../assets/images/png/checked.png'

export const Filter = ({
	dropDownOptionChoosen,
	filtersOptions,
	setDropDownOptionChoosen,
}) => {
	const [dropDownIsOpen, setDropDownIsOpen] = useState(false)

	function handleChoice(option) {
		setDropDownOptionChoosen(option)
		setDropDownIsOpen(false)
	}
	return (
		<>
			<StyledFilter onClick={() => setDropDownIsOpen(true)}>
				<RowContainer>
					<SubTitle
						partOne={`VER:`}
						partTwo={`${dropDownOptionChoosen.title}`}
						size={18}
					/>
					&nbsp;&nbsp;
					<ImageIcon src={downArrow} />
				</RowContainer>
			</StyledFilter>

			<DropDown dropDownIsOpen={dropDownIsOpen}>
				{filtersOptions.map((option) => {
					return (
						<OptionContainer
							key={option.id}
							onClick={() => handleChoice(option)}
						>
							<Option
								option={option}
								dropDownOptionChoosen={dropDownOptionChoosen}
							>
								{option.title}
							</Option>
							<Checked
								option={option}
								dropDownOptionChoosen={dropDownOptionChoosen}
								src={checked}
							></Checked>
						</OptionContainer>
					)
				})}
			</DropDown>
		</>
	)
}
