import { UserRepository } from '../useCases/ports/user-repository'
import { UserData } from '../useCases/register-user-on-mailing-list/user-data'

export class InMemoryUserRepository implements UserRepository {
  private repository: UserData[]
  constructor (repository: UserData[]) {
    this.repository = repository
  }

  async findUserByEmail (email: string): Promise<UserData> {
    const users = this.repository.filter(user => user.email === email)
    if (users.length > 0) {
      return users[0]
    }
    return null
  }

  async exists (user: UserData): Promise<boolean> {
    if (await this.findUserByEmail(user.email) === null) {
      return false
    }
    return true
  }

  async add (user: UserData): Promise<void> {
    const exists = await this.exists(user)
    if (!exists) {
      this.repository.push(user)
    }
  }

  async findAllUsers (): Promise<UserData[]> {
    return this.repository
  }
}
