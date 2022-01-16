import { UserRepository } from '../useCases/ports/user-repository'
import { UserData } from '../useCases/register-user-on-mailing-list/user-data'

export class InMemoryUserRepository implements UserRepository {
  private repository: UserData[]
  constructor (repository: UserData[]) {
    this.repository = repository
  }

  findUserByEmail (email: string): Promise<UserData> {
    return null
  }

  exists (user: UserData): Promise<boolean> {
    throw new Error('Method not implemented.')
  }

  add (user: UserData): Promise<void> {
    throw new Error('Method not implemented.')
  }

  findAllUsers (): Promise<UserData[]> {
    throw new Error('Method not implemented.')
  }
}
