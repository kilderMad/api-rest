import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade'], // dados que quero
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']], // fator de ordem e se é CRES ou DESC
      include: {
        model: Foto,
        attributes: ['url', 'filename'],
      },
    });
    res.json(alunos);
  }

  async create(req, res) {
    try {
      const newAluno = await Aluno.create(req.body);
      return res.json(newAluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Id nao informado'],
        });
      }
      const aluno = await Aluno.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade'], // dados que quero
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']], // fator de ordem e se é CRES ou DESC
        include: {
          model: Foto,
          attributes: ['url', 'filename'],
        },
      });

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno nao existe'],
        });
      }
      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Id nao informado'],
        });
      }
      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno nao existe'],
        });
      }
      await aluno.destroy();
      return res.json('Aluno Apagado');
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Id nao informado'],
        });
      }
      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno nao existe'],
        });
      }
      const alunoUp = await aluno.update(req.body);
      return res.json(alunoUp);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new AlunoController();
