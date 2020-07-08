import React from 'react';
import styled from 'styled-components';
// TODO : Chnage these value to icon
// import ainize from '../../static/img/footer/ainize.svg';
// import github from '../../static/img/footer/github.svg';

const githubURL = 'https://github.com/CDP-BETA/Developer-Interview-Question';
const ainizeURL = 'https://ainize.ai/';

const Wrapper = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-top: 32px;
    margin-bottom: 24px;
`;

const Row = styled.div`
    cursor: pointer;
    font-size: 0.8rem;
    display: table-cell;
    vertical-align: middle;
`;

const Icon = styled.img`
    vertical-align: middle;
    margin-left: 10px;
    width: 160px;
`;

class Footer extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        return (
            // TODO (Add icon)
            <Wrapper>
                <Row onClick={() => window.open(githubURL, '_blank')}>
                    <Icon style={{paddingBottom: '2px'}} src={'../static/img/footer/git.png'} />
                </Row>
                <Row onClick={() => {
                    window.gtag('event', 'poweredby_click', {
                        'event_category': 'spotainize_common',
                        'non_interaction': false,
                    });

                    window.open(ainizeURL, '_blank');
                }}>
                    <Icon style={{paddingBottom: '3px'}} src={'../static/img/footer/ainize.png'} />
                </Row>
            </Wrapper>
        );
    };
}

export default Footer;
