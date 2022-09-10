import React, { Component } from "react";
import Spinner from "../spinner";

const withData = (View) => {

    return class extends Component {

        state = {
            data: null,
            isLoaded: false
        }

        componentDidMount() {
            this.updateState();
        }

        updateState() {
            this.props.getData()
                .then((data) => {
                    this.setState({
                        data,
                        isLoaded: true
                    });
                });
        }

        render() {

            const { data, isLoaded } = this.state;

            if (!isLoaded) {
                return <Spinner />;
            }

            return (
                <View {...this.props} data={data} />
            );
        }
    }
}

export default withData;