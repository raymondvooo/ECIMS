import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import styles from "../../css/main.module.scss"

class AddInventory extends Component {
    state = {

    };

    componentDidMount() {

    }



    render() {

        return (
            <div className={styles["add-inventory-page"]}>
            <h1>
                Add New Inventory!!!!
            </h1>
            <div className={styles['input-wrapper']}>
                <div>
                    <label>
                        Name
                    </label>
                    <input/>
                </div>
                <div>
                    <label>
                        IP Address
                    </label>
                    <input/>
                </div>
                <div>
                    <label>
                        Mac Address
                    </label>
                    <input/>
                </div>
            </div>
            <div className={styles['button-wrapper']}>
                <button>Clear</button>
                <button>Add to Database</button>
            </div>
            </div>
        );
    }
}

export default withRouter(AddInventory);
