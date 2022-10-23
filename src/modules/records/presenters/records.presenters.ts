import { Injectable } from '@nestjs/common';
import { Record } from '../entities/record.entity';

@Injectable()
export class RecordPresenter {
  groupRecordsByStartDate(records: Record[]) {
    const recordsData = records.reduce(
      (records: any, record) => ({
        ...records,
        [record.start.toISOString().substring(0, 10)]: [
          ...(records[record.start.toISOString().substring(0, 10)] || []),
          record,
        ],
      }),
      {},
    );
    const data = [];
    for (const [key, value] of Object.entries(recordsData)) {
      data.push({
        date: key,
        records: value,
      });
    }

    return data;
  }
}
