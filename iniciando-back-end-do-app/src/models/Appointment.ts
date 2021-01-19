import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('appointments')
class Appointment {
  @PrimaryColumn()
  id: string;

  @Column()
  provider: string;

  @Column('timestamp without time zone')
  date: Date;
}

export default Appointment;
