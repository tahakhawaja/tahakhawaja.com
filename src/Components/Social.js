import React, {Component} from 'react';

class SocialIcon extends Component {
    render() {
        const { link, name } = this.props;
        return (
            <a href={link} target="_blank" rel="noopener noreferrer">
                /*<img src={`${process.env.PUBLIC_URL}/Icons/${name}.svg`} alt={`${name} logo`} />*/
            </a>
        );
    }
}

class Social extends Component {
    render() {
        return(
            <div className="social">
                <SocialIcon link="https://github.com/tahakhawaja" name="github" />
                <SocialIcon link="https://www.linkedin.com/in/tahakhawaja/" name="linkedin" />
                <SocialIcon link="mailto:taha.khawaja1@gmail.com" name="email2" />
                <SocialIcon link="http://www.twitter.com/tahakhawaja_" name="twitter" />
            </div>
        )
    }
}

export default Social;
