import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  ko_name: string;

  @Column()
  en_name: string;

  @Column()
  en_last_name: string;

  @Column()
  birth_date: string;

  @Column()
  email: string;

  @Column()
  mobile: string;

  @Column()
  pwd: string;

  @Column()
  gender: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
