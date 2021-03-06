import { Record } from 'immutable';

const ItemRecord = Record({
    id: 0,
    text: '',
    item_order: 0,
    project: 0,
    due_date_utc: '',
    recurring: false,
    priority: 0,
    parent_id: null,
    responsible_uid: null,
    date_added: '',
    date_string: '',
});

export default class Item extends ItemRecord {
    updateWith({ id, text, item_order, project, due, priority, parent_id, responsible_uid, date_added, date_string }) {
        return new Item({
            id: id || this.id,
            text: text || this.text,
            item_order: item_order || this.item_order,
            project: project || this.project,
            due_date_utc: due ? due.date : this.due_date_utc,
            recurring: (due && due.is_recurring) || this.recurring,
            priority: priority || this.priority,
            parent_id: parent_id || this.parent_id,
            responsible_uid: responsible_uid || this.responsible_uid,
            date_added: date_added || this.date_added,
            date_string: date_string || this.date_string,
        });
    }
}
