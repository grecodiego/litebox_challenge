import {
	Checked,
	Diamond,
	DropDown,
	ImageIcon,
	Option,
	OptionContainer,
	RowContainer,
	StyledFilter,
} from './filter.styled'
import { SubTitle } from '../../../subTitle/subTitle'
import downArrow from '../../../../assets/images/png/downArrow.png'
import { useState, Fragment } from 'react'
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
		<Fragment>
			<StyledFilter onClick={() => setDropDownIsOpen(!dropDownIsOpen)}>
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
				<Diamond />
				{filtersOptions.map((option) => {
					return (
						<OptionContainer
							key={option.id}
							onClick={() => handleChoice(option)}>
							<Option
								option={option}
								dropDownOptionChoosen={dropDownOptionChoosen}>
								{option.title}
							</Option>
							<Checked
								option={option}
								dropDownOptionChoosen={dropDownOptionChoosen}
								src={checked}></Checked>
						</OptionContainer>
					)
				})}
			</DropDown>
		</Fragment>
	)
}
