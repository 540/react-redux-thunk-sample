import * as React from 'react';

type Props = Readonly<{
    interval?: number;
    dots?: number;
}>;

type State = Readonly<{
    frame: number;
}>;

class LoadingDots extends React.Component<Props, State> {

    static defaultProps: Props = {
        interval: 300,
        dots: 3
    };

    private interval: number;

    constructor(props: Props) {
        super(props);

        this.state = {frame: 1};
    }

    componentDidMount() {
        this.interval = setInterval(
            () => this.setState({frame: this.state.frame + 1}),
            this.props.interval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        let dots = this.state.frame % (this.props.dots! + 1);
        let text = '';
        while (dots > 0) {
            text += '.';
            dots--;
        }
        return <span {...this.props}>{text}&nbsp;</span>;
    }
}

export default LoadingDots;