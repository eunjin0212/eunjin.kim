import { SvgIcon } from '@mui/material';
import { portfolioData } from 'mock/data';
import Lamp from 'public/lamp.svg';
import {
  Caption,
  ExplanationBox,
  Item,
  MainBody,
  MainHeader,
  MainWrapper,
  Title
} from 'styles/components/Introduce.style';

const Introduce = () => {
	return (
		<MainWrapper>
			<MainHeader>
				<SvgIcon component={Lamp} inheritViewBox fontSize={'large'} />
				<Title variant='h4'>{portfolioData.title}</Title>
				<Caption variant='caption'>{portfolioData.caption}</Caption>
			</MainHeader>
			<MainBody>
				<Item alt='mainImg' src={portfolioData.mainImg}></Item>
				<ExplanationBox>
					{portfolioData.about.map((item, key) => (
						<div key={key}>
							<label>
								<span>{item.prevText}</span>
								<u>{item.emphasis}</u>
								<span>{item.nextText}</span>
							</label>
							<b>{item.bold}</b>
						</div>
					))}
				</ExplanationBox>
			</MainBody>
		</MainWrapper>
	);
};
export default Introduce;
