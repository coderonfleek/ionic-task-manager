import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItemSliding,
  IonItem,
  IonLabel,
  IonItemOptions,
  IonItemOption,
  IonFab,
  IonFabButton,
  IonIcon,
  IonModal,
  IonButton,
  IonCard,
  IonCardContent,
} from "@ionic/react";

import { add, pin } from "ionicons/icons";

import "./Tab1.css";

const sampleTasks = [
  {
    id: 1,
    name: "Wash dishes",
  },
  {
    id: 2,
    name: "Buy Groceries",
  },
];

interface Task {
  id: number;
  name: string;
}

const Tab1: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showModal, setShowModal] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Task Manager</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {tasks.length > 0 ? (
            tasks.map((item: Task) => {
              return (
                <IonItemSliding key={item.id}>
                  <IonItem className="todo-item">
                    <IonLabel>{item.name}</IonLabel>
                  </IonItem>
                  <IonItemOptions side="end">
                    <IonItemOption onClick={() => {}}>Done</IonItemOption>
                  </IonItemOptions>
                </IonItemSliding>
              );
            })
          ) : (
            <IonItem>
              <IonLabel>You are yet to add tasks for Today</IonLabel>
            </IonItem>
          )}
        </IonList>

        {/* Modal*/}
        <IonModal isOpen={showModal}>
          <IonCard>
            <IonItem>
              <IonLabel>Add New Task</IonLabel>
            </IonItem>

            <IonCardContent>
              This is content, without any paragraph or header tags, within an
              ion-cardContent element.
            </IonCardContent>
          </IonCard>
          <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
        </IonModal>

        {/* FAB */}
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => setShowModal(true)}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
