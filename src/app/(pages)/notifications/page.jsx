'use client'

import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Layout from "../../components/layout";
import NotificationCard from "../../components/Notification/NotificationCard";
import { FetchAllNotificationsDataService } from "../../services/NotificationService/FetchAllNotificationsService";

const NotificationPage = () => {

    const { data:notifications, isLoading: loading} =  FetchAllNotificationsDataService()

    return (
        <Layout>
            <BreadCrumb title='Notifications' />
            {
                loading ? (
                    <div>Loading</div>
                ) : (
                    <div>
                        {
                            notifications.data.length > 0 && notifications.data.map((notification, index) => (
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