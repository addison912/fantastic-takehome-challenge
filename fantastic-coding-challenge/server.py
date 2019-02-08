from random import choice

from twisted.web import server, resource
from twisted.internet import reactor


class Uninspiring(Exception):
    pass


class Fantastic(resource.Resource):
    isLeaf = True

    def render_GET(self, request):
        if choice([True, True, True, False]):
            return "Fantastic!".encode('utf-8')  # Twisted expects bytes.
        else:
            raise Uninspiring()


class run():
    site = server.Site(Fantastic())
    reactor.listenTCP(12345, site)
    reactor.run()


if __name__ == "__main__":
    run()
