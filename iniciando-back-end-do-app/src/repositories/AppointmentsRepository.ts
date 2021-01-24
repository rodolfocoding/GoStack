import { EntityRepository, Repository } from 'typeorm';
import Appoitment from '../models/Appointment';

@EntityRepository(Appoitment)
class AppointmentsRepository extends Repository<Appoitment> {
  public async findByDate(
    date: Date,
    provider_id: string,
  ): Promise<Appoitment | null> {
    const findAppointment = await this.findOne({
      where: { date, provider_id },
    });

    return findAppointment || null;
  }
}

export default AppointmentsRepository;
