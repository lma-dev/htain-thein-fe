'use client'

import { useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Layout from "../../components/layout";
import NotificationCard from "../../components/Notification/NotificationCard";
import { fetchAllNotificationsData } from "../../services/NotificationService/FetchAllNotificationsData";

const NotificationPage = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        fetchAllNotificationsData(setData, setLoading);
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <Layout>
            <BreadCrumb title='Notifications' />
            {
                loading ? (
                    <div>Loading</div>
                ) : (
                    <div>
                        {
                            data.length > 0 && data.map((notification, index) => (
                                <NotificationCard key={index} notification={notification} />
                            ))
                        }
                    </div>
                )
            }

        </Layout >
    )

}

export default NotificationPage;    