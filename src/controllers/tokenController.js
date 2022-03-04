import jwt from 'jsonwebtoken';
import User from '../models/User';
import 'dotenv';

class TokenController {
  async index(req, res) {
    res.json('ok');
  }

  async create(req, res) {
    const { email = '', password = '' } = req.body;
    // verificando se foram informados a senha e o email
    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credencias invalidas'],
      });
    }
    // verificando se possui esse email na bd
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuario nao existe'],
      });
    }

    // verificando a senha

    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Senha Invalida!!!'],
      });
    }

    // criar o token do usuario
    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token, user: { nome: user.nome, id, email } });
  }
}

export default new TokenController();
