import {ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer} from "./styles";

function VideoComponent(){
    return (
        <>
        <Container>
            <ImageBanner src="https://i.ytimg.com/vi/tI55Zu9uZEM/maxresdefault.jpg"/>

                <TitleContainer>
                    <ChannelImage>
                        CM
                    </ChannelImage>

                    <TextContainer>
                        <Title>Marilia mendonca - leao - decretos reais 2</Title>
                        <TextCard>Marilia mendonca</TextCard>
                        <TextCard>109 mi de visualizacoes - há 2 meses</TextCard>
                    </TextContainer>
                </TitleContainer>
               
               
        </Container>
 
       </>
    )


};

export default VideoComponent;

