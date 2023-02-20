import { Grid, SvgIcon } from '@mui/material';
import { portfolioData } from 'mock/data';
import Lamp from 'public/lamp.svg';
import {
  Caption,
  ExplanationBox,
  IntroBody,
  IntroHeader,
  Item,
  MainWrapper,
  Title
} from 'styles/components/Introduce.style';

const Introduce = () => {
	return (
		<MainWrapper>
			<IntroHeader>
				<SvgIcon fontSize='large' component={Lamp} inheritViewBox />
				<Title variant='h3'>{portfolioData.title}</Title>
				<Caption variant='caption'>{portfolioData.caption}</Caption>
			</IntroHeader>
			<IntroBody container columnSpacing={2}>
				<Grid item xs={6}>
					<Item alt='mainImg' src={portfolioData.mainImg}></Item>
				</Grid>
				<Grid item xs={6}>
					<ExplanationBox>
						{portfolioData.about.map((item, key) => (
							<div key={key}>
								<p>
									<span>{item.prevText}</span>
									<u>{item.emphasis}</u>
									<span>{item.nextText}</span>
								</p>
								<b>{item.bold}</b>
							</div>
						))}
					</ExplanationBox>
				</Grid>
			</IntroBody>
		</MainWrapper>
	);
};
export default Introduce;
