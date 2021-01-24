import { startOfHour } from 'date-fns';
import { getCustomRepository, getRepository } from 'typeorm';
import Appointment from '../models/Appointment';
import User from '../models/User';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface Request {
  date: Date;
  provider_id: string;
}

class CreateAppointmentService {
  public async execute({ date, provider_id }: Request): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);
    const userRepository = getRepository(User);

    const appointmentDate = startOfHour(date);

    const userExists = await userRepository.findOne({
      where: { id: provider_id },
    });

    if (!userExists) {
      throw Error('User not exists!');
    }

    const findAppointmentInSameDate = await appointmentsRepository.findByDate(
      appointmentDate,
      provider_id,
    );

    if (findAppointmentInSameDate) {
      throw Error('This appointment is already booked!');
    }

    const appointment = appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    });

    await appointmentsRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
