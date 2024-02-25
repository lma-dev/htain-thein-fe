'use client'

import { useQuery } from '@tanstack/react-query'
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Layout from "../../components/layout";
import NotificationCard from "../../components/Notification/NotificationCard";
import { fetchAllNotificationsDataService } from "../../services/NotificationService/FetchAllNotificationsData";

const NotificationPage = () => {

    const { data:notifications, isLoading: loading} =  useQuery({ queryKey: ['notifications'], queryFn: fetchAllNotificationsDataService,cached: true})

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